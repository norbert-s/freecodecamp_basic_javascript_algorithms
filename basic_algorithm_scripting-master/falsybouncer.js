function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // I've a hammer fist.

  return arr.filter(Boolean);
}

bouncer([true, true,true, true, null, null,null,null, 0, NaN,NaN,NaN, undefined, undefined,undefined,"","","",""]);