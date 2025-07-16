import { describe, it, expect, beforeEach } from 'vitest';
import { saveConnectionState, getLastConnectedWallet } from '../hooks/user';

describe('Connection persistence utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves and retrieves last connected wallet', () => {
    saveConnectionState('meta_mask');
    expect(getLastConnectedWallet()).toBe('meta_mask');
  });
});
