import React, { useState } from 'react';

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedNft, setSelectedNft] = useState('#0142');
  const [hoodColor, setHoodColor] = useState('#10b981');
  const [visorGlow, setVisorGlow] = useState('#06b6d4');
  const [cyberware, setCyberware] = useState('Neural Jack v2');
  const [aura, setAura] = useState('Matrix Rain');
  const [customText, setCustomText] = useState('ROOT #0142');
  const [savedMessage, setSavedMessage] = useState('');

  const mockNfts = [
    { id: '#0142', name: 'ROOT HOOD #0142', rarity: 'Legendary' },
    { id: '#1893', name: 'ROOT HOOD #1893', rarity: 'Epic' },
    { id: '#4021', name: 'ROOT HOOD #4021', rarity: 'Rare' },
    { id: '#8812', name: 'ROOT HOOD #8812', rarity: 'Common' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '15px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#34d399', margin: 0 }}>ROOT HOOD CUSTOMIZER</h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Holder Customization Studio</p>
        </div>
        <button 
          onClick={() => setWalletConnected(!walletConnected)}
          style={{ backgroundColor: walletConnected ? '#059669' : '#10b981', color: '#020617', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {walletConnected ? 'Connected (0x8F...39A)' : 'Connect Wallet'}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Preview Panel */}
        <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b', textAlign: 'center' }}>
          <h3>Preview: {selectedNft}</h3>
          <div style={{ width: '200px', height: '200px', margin: '20px auto', backgroundColor: '#020617', border: `2px solid ${hoodColor}`, borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${hoodColor}40` }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: hoodColor, borderRadius: '50%', marginBottom: '10px' }} />
            <span style={{ fontSize: '14px', fontFamily: 'monospace', color: visorGlow }}>Visor: {visorGlow}</span>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Aura: {aura} | Gear: {cyberware}</p>
          <p style={{ fontSize: '12px', color: '#38bdf8' }}>Badge: {customText}</p>
        </div>

        {/* Controls Panel */}
        <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3>Kustomisasi Trait</h3>
          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '5px' }}>Pilih NFT:</label>
            <select value={selectedNft} onChange={(e) => setSelectedNft(e.target.value)} style={{ width: '100%', padding: '8px', backgroundColor: '#020617', color: '#fff', border: '1px solid #334155', borderRadius: '6px' }}>
              {mockNfts.map(nft => <option key={nft.id} value={nft.id}>{nft.name}</option>)}
            </select>
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '5px' }}>Warna Hood:</label>
            <input type="color" value={hoodColor} onChange={(e) => setHoodColor(e.target.value)} style={{ width: '100%', height: '40px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }} />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '5px' }}>Warna Visor HUD:</label>
            <input type="color" value={visorGlow} onChange={(e) => setVisorGlow(e.target.value)} style={{ width: '100%', height: '40px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }} />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '5px' }}>Teks Badge Kustom:</label>
            <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} style={{ width: '100%', padding: '8px', backgroundColor: '#020617', color: '#fff', border: '1px solid #334155', borderRadius: '6px' }} />
          </div>

          <button 
            onClick={() => { setSavedMessage('Konfigurasi berhasil disimpan!'); setTimeout(() => setSavedMessage(''), 3000); }}
            style={{ backgroundColor: '#10b981', color: '#020617', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            Simpan Kombinasi
          </button>
          {savedMessage && <p style={{ color: '#34d399', fontSize: '12px', margin: 0 }}>{savedMessage}</p>}
        </div>
      </div>
    </div>
  );
}