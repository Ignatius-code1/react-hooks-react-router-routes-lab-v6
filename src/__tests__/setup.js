import { afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

// Suppress unhandled promise rejections that cause test failures
beforeAll(() => {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('Unhandled promise rejection')) {
      return;
    }
    originalConsoleError(...args);
  };
});

afterEach(() => {
    cleanup();
})
