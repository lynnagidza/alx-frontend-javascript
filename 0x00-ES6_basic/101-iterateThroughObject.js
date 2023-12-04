export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const employee of reportWithIterator.allEmployees.engineering) {
    employees += `${employee} | `;
  }

  return employees.slice(0, -3);
}
