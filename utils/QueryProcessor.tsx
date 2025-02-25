export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("andrew")) {
    return "rohan3";
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+)(?:\s*plus\s*(\d+))+/gi);
    if (match) {
      const numbers = match[0].match(/\d+/g)?.map(Number) || [];
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const match = query.match(/(\d+)\s*multiplied by\s*(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 * num2).toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const match = query.match(/(\d+)\s*minus\s*(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 - num2).toString();
    }
  }

  if (query.toLowerCase().includes("prime")) {
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
      const isPrime = (num: number) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(isPrime);
      return `Prime numbers: ${primes.join(", ")}`;
    }
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
      const isSquareAndCube = (num: number) => {
        const root6 = Math.pow(num, 1 / 6);
        return Number.isInteger(root6);
      };
      const results = numbers.filter(isSquareAndCube);
      return `Numbers that are both squares and cubes: ${results.join(", ")}`;
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    const match = query.match(/(\d+)\s*to the power of\s*(\d+)/i);
    if (match) {
      const base = parseInt(match[1], 10);
      const exponent = parseInt(match[2], 10);
      return Math.pow(base, exponent).toString();
    }
  }

  return "";
}
