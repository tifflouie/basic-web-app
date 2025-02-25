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
    const match = query.match(/(\d+)\s*plus\s*(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 + num2).toString();
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

  return "";
}
