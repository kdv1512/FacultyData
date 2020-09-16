var getLastName = function(employee)
{
    return employee.lastName;
};
d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLastName);