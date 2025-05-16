export const getFraudRisk = (userId: string) => {
  return { riskScore: Math.random().toFixed(2) }
}