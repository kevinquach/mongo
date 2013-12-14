function insertCity(
    name, population, last_census,
    famous_for, mayor_info
) {
  db.towns.insert({
    name: name,
    population: population,
    last_census: ISODate(last_census),
    famous_for: famous_for,
    mayor: mayor_info
  });
}
