export default (
  initialInvestment: number,
  monthInvestment: number,
  quantityMonth: number,
  selicTax = 9.25,
  arcaTax = 18
) => {
  const dailySelicIncome = Math.pow(1 + selicTax / 100, 1 / 252) - 1;
  const dailyArcaIncome = Math.pow(1 + arcaTax / 100, 1 / 252) - 1;

  let totalSelic = initialInvestment;
  let totalArca = initialInvestment;

  for (let i = 0; i < quantityMonth; i++) {
    totalSelic += monthInvestment;
    totalArca += monthInvestment;

    for (let day = 0; day < 21; day++) {
      totalSelic *= 1 + dailySelicIncome;
      totalArca *= 1 + dailyArcaIncome;
    }
  }

  return { totalSelic, totalArca };
};
