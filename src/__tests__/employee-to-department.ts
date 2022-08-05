import employeeToDepartment from "../randoms/employee-to-department";

describe("employee to department", () => {
  it("simple input", () => {
    const employees: Array<{ employee: string; department: string }> = [
      { employee: "Anuj", department: "Engineering" },
      { employee: "Shashank", department: "Engineering" },
      { employee: "Elena", department: "QA" },
      { employee: "Kevin", department: "Product" },
      { employee: "Paul", department: "Product" },
    ];
    expect(employeeToDepartment(employees)).toEqual([
      { count: 2, department: "Engineering" },
      { count: 1, department: "QA" },
      { count: 2, department: "Product" },
    ]);
  });
});
