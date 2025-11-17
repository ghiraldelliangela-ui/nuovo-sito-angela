import React, { useEffect, useRef } from 'react';
import type { Service } from '../types';

// Add paypal to the window object for TypeScript
declare global {
  interface Window {
    paypal?: any;
  }
}

interface PayPalButtonProps {
  service: Service;
  onSuccess: () => void;
  onError: (err: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ service, onSuccess, onError }) => {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.paypal || !paypalRef.current) {
      return;
    }

    const buttons = window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            description: service.title,
            amount: {
              currency_code: 'EUR',
              value: service.price.toString()
            }
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();
        console.log('Payment successful:', order);
        onSuccess();
      },
      onError: (err: any) => {
        console.error('PayPal Error:', err);
        onError(err);
      }
    });

    // Render the buttons. Let the SDK manage the container.
    buttons.render(paypalRef.current).catch((err: any) => {
      console.error('PayPal render error:', err);
      // It's possible the container isn't ready, so we clear it on error to be safe.
      if (paypalRef.current) {
        paypalRef.current.innerHTML = '';
      }
      onError(err);
    });

    // Return a cleanup function to be called on unmount or when service changes.
    return () => {
      buttons.close().catch((err: any) => {
        console.warn('PayPal button cleanup failed.', err);
      });
    };
  }, [service, onSuccess, onError]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;