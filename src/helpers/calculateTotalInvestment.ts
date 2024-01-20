export default (
  initialInvestment: number,
  monthInvestment: number,
  quantityMonth: number,
  selicTax = 9.25,
  arcaTax = 18
) => {
  const total = Number(initialInvestment) + Number(monthInvestment) * Number(quantityMonth)

  const dailySelicIncome = total * Math.pow(1 + selicTax / 100, (quantityMonth * 21) / 252)
  const dailyArcaIncome = total * Math.pow(1 + arcaTax / 100, (quantityMonth * 21) / 252)

  return { totalSelic: dailySelicIncome, totalArca: dailyArcaIncome }
}
