export default (
  employees: Array<{ employee: string; department: string }>
): Array<{ department: string; count: number }> => {
  const departmentMap: { [key: string]: number } = {};
  const departments: Array<{ department: string; count: number }> = [];
  for (let i = 0; i < employees.length; i++) {
    departmentMap[employees[i].department] = departmentMap[
      employees[i].department
    ]
      ? departmentMap[employees[i].department] + 1
      : 1;
  }
  Object.keys(departmentMap).forEach((department) => {
    departments.push({ department, count: departmentMap[department] });
  });
  return departments;
};
