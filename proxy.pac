function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.sec.samsung.net")) {
    return "SOCKS 127.0.0.1:8080";
  }
  
  if (shExpMatch(host, "*.samsung.net")) {
    return "SOCKS 127.0.0.1:8080";
  }

  if (shExpMatch(host, "165.213.202.130")) {        // Gerrit
    return "SOCKS 127.0.0.1:8080";
  }
  
  if (isInNet(host, "10.252.0.0", "255.255.0.0")) { // Local1
    return "SOCKS 127.0.0.1:8080";
  }

  if (isInNet(host, "10.253.0.0", "255.255.0.0")) { // Local2
    return "SOCKS 127.0.0.1:8080";
  }
  
  return "DIRECT";
}
