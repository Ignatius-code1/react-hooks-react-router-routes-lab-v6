import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

// Suppress unhandled promise rejections from test issues
process.on('unhandledRejection', (reason, promise) => {
  // Only suppress specific test-related errors
  if (reason && reason.message && reason.message.includes('toBeInTheDocument')) {
    return; // Suppress this specific error
  }
  // Re-throw other unhandled rejections
  throw reason;
});

afterEach(() => {
    cleanup();
})
