const longestDupSubstring = (S) => {
    const n = S.length;
    const nums = [];
    for (let i = 0; i < n; ++i) {
      nums[i] = S[i].charCodeAt(0) - 97;
    }
    const mod = 2 ** 32; 
  
    const search = (len) => {
      let hash = 0;
      for (let i = 0; i < len; i++) {
        hash = (hash * 26 + nums[i]) % mod;
      }
  
      const seen = new Set();
      seen.add(hash);
  
      let aL = 1;
      for (let i = 1; i <= len; i++) {
        aL = (aL * 26) % mod; 
      }
  
      for (let start = 1; start < n - len + 1; start++) {
        hash = ((hash * 26 - nums[start - 1] * aL % mod + mod) % mod + nums[start - 1 + len]) % mod;
        if (seen.has(hash)) return start;
        seen.add(hash);
      }
      return -1;
    };
  
    let l = 0;
    let r = n;
    while (l < r) {
      const m = l + (r - l) / 2;
      if (search(m) !== -1) l = m + 1;
      else r = m;
    }
  
    const start = search(l - 1);
    return S.slice(start, start + l - 1);
  };