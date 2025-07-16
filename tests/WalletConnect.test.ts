import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('WalletConnect feature checks', () => {
  const filePath = path.join(__dirname, '..', 'components', 'web3', 'WalletConnect.tsx');
  const content = fs.readFileSync(filePath, 'utf-8');

  it('contains specific error messages for each wallet', () => {
    expect(content).toMatch(/meta_mask: \"Please install MetaMask extension or check if it's unlocked\"/);
    expect(content).toMatch(/token_pocket: 'Please install TokenPocket or check if it\\'s unlocked'/);
    expect(content).toMatch(/bitget_wallet: 'Please install Bitget Wallet or check if it\\'s unlocked'/);
    expect(content).toMatch(/particle_network: 'Particle Network connection failed. Please try again.'/);
    expect(content).toMatch(/wallet_connect: 'WalletConnect connection failed. Please try again.'/);
  });
});
