test("Deve retornar status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedDate = new Date(responseBody.update_at);

  expect(responseBody.update_at).toEqual(parsedDate.toISOString());

  expect(responseBody.dependencies.database.version).toBe("16.10");

  expect(responseBody.dependencies.database.max_connections).toBe(100);

  expect(responseBody.dependencies.database.opened_connections).toBe(1);
});
