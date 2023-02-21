import * as Crypto from "expo-crypto";
export default async function hash(string) {
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    string
  );
  return hash;
}
