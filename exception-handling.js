function calculate(price, tax) {
  try {
    if (price <= 0) {
      throw new Error("Price must be positive");
    }
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("done");
  }
}

calculate(0, 10);
