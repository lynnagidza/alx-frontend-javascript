export default function createReportObject(employeesList) {
  const employeeReport = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return employeeReport;
}
