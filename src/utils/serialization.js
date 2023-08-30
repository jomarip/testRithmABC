export const serializeWithBigInt = (data) => {
  return JSON.stringify(data, (_key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};

export const deserializeWithBigInt = (jsonString) => {
  return JSON.parse(jsonString, (_key, value) => {
    if (typeof value === "string" && /^\d+n$/.test(value)) {
      return BigInt(value.slice(0, -1));
    }
    return value;
  });
};
