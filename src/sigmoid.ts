function sigmoid(value: number, min: number = 0, max: number = 100) {
  return (value - min) / (max - min);
}

export default sigmoid;
