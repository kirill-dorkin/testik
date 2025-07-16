import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('Web3Status feature checks', () => {
  const filePath = path.join(__dirname, '..', 'components', 'web3', 'Web3Status.tsx');
  const content = fs.readFileSync(filePath, 'utf-8');

  it('includes supported networks linea and bsc', () => {
    expect(content).toMatch(/const supportedNetworks = \[polygon, linea, bsc\]/);
  });

  it('connect button shows loading state', () => {
    expect(content).toMatch(/disabled={isConnecting}/);
    expect(content).toMatch(/isConnecting \? 'Connecting...' : 'Connect'/);
  });
});
