import { useState } from 'react';

export default function SteamLogin() {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = () => {
    console.log('Account Name:', accountName);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    alert(`Signing in as: ${accountName}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
      fontFamily: '"Motiva Sans", Arial, sans-serif'
    }}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Crect fill=\'%23172a3a\' width=\'1200\' height=\'800\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover'
      }} />

      {/* Header */}
      <header style={{ background: '#171a21' }} className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2.5 no-underline">
              <div className="w-10 h-10 bg-white rounded-full" />
              <span className="text-white text-[26px] font-light" style={{ letterSpacing: '3px' }}>STEAM</span>
            </a>
            <nav className="flex gap-8">
              <a href="#" className="no-underline text-sm uppercase transition-colors" style={{ color: '#66c0f4' }}>STORE</a>
              <a href="#" className="no-underline text-sm uppercase transition-colors" style={{ color: '#b8b6b4' }}>COMMUNITY</a>
              <a href="#" className="no-underline text-sm uppercase transition-colors" style={{ color: '#b8b6b4' }}>ABOUT</a>
              <a href="#" className="no-underline text-sm uppercase transition-colors" style={{ color: '#b8b6b4' }}>SUPPORT</a>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="px-4 py-2 rounded-sm text-xs flex items-center gap-1.5 no-underline" style={{ 
              background: '#5c7e10',
              color: '#d2e885'
            }}>
              ⬇ Install Steam
            </a>
            <a href="#" className="text-xs no-underline" style={{ color: '#b8b6b4' }}>login</a>
            <span className="text-xs" style={{ color: '#b8b6b4' }}>|</span>
            <a href="#" className="text-xs no-underline" style={{ color: '#b8b6b4' }}>language ▾</a>
          </div>
        </div>
      </header>

      {/* Sub Navigation */}
      <div className="relative z-9" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center gap-8">
          <span className="text-[13px] cursor-pointer" style={{ color: '#b8b6b4' }}>Browse ▾</span>
          <span className="text-[13px] cursor-pointer" style={{ color: '#b8b6b4' }}>Recommendations ▾</span>
          <span className="text-[13px] cursor-pointer" style={{ color: '#b8b6b4' }}>Categories ▾</span>
          <span className="text-[13px] cursor-pointer" style={{ color: '#b8b6b4' }}>Ways to Play ▾</span>
          <span className="text-[13px] cursor-pointer" style={{ color: '#b8b6b4' }}>Special Sections ▾</span>
          <div className="ml-auto flex">
            <input 
              type="text" 
              placeholder="Search the store" 
              className="border-none px-3 py-2 text-white w-[300px] text-[13px] focus:outline-none"
              style={{ background: 'rgba(0, 0, 0, 0.3)' }}
            />
            <button className="px-4 py-2 text-white cursor-pointer border-none" style={{ background: '#00a2ff' }}>🔍</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-5 relative z-1" style={{ marginTop: '80px' }}>
        <div className="p-[60px] rounded" style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
          backdropFilter: 'blur(20px)'
        }}>
          <h1 className="text-white text-[42px] font-light mb-[60px]">Sign in</h1>
          
          <div className="max-w-[450px]">
            <label className="block text-xs uppercase mb-3" style={{ 
              color: '#66c0f4',
              letterSpacing: '1px'
            }}>
              SIGN IN WITH ACCOUNT NAME
            </label>
            <div className="relative mb-5">
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full border-none px-3 py-3 text-white text-base rounded-sm focus:outline-none"
                style={{
                  background: '#32414f',
                  paddingRight: '40px'
                }}
              />
              <div className="absolute right-3 w-5 h-5 rounded-sm" style={{ 
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#7c7c7c'
              }} />
            </div>

            <label className="block text-xs uppercase mb-3" style={{ 
              color: '#66c0f4',
              letterSpacing: '1px'
            }}>
              PASSWORD
            </label>
            <div className="relative mb-5">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full border-none px-3 py-3 text-white text-base rounded-sm focus:outline-none"
                style={{ background: '#32414f' }}
              />
            </div>

            <div 
              className="flex items-center gap-2 cursor-pointer" 
              style={{ margin: '20px 0 30px 0' }}
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div className="w-[18px] h-[18px] rounded-sm flex items-center justify-center text-white text-sm" style={{
                background: '#417a9b'
              }}>
                {rememberMe && '✓'}
              </div>
              <label className="text-sm cursor-pointer" style={{ color: '#b8b6b4' }}>Remember me</label>
            </div>

            <button
              onClick={handleSignIn}
              className="w-full border-none text-white px-4 py-4 text-lg font-light rounded-sm cursor-pointer mb-5 transition-all"
              style={{
                background: 'linear-gradient(to bottom, #47bfff 5%, #1b8dc7 95%)',
                letterSpacing: '1px'
              }}
            >
              Sign in
            </button>
            
            <div className="text-center">
              <a href="#" className="text-[13px] no-underline inline-block" style={{ 
                color: '#8f98a0',
                borderBottom: '1px solid #8f98a0'
              }}>
                Help, I can't sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
