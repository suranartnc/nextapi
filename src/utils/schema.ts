export function getComplexityForConnection(weight = 1 / 10) {
  return ({ args, childComplexity }) => {
    if (args.first) {
      return childComplexity + args.first * weight
    }

    return childComplexity
  }
}
