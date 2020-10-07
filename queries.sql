-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select Product.productName, Category.categoryName
from Product
join Category on Category.id = Product.categoryId
order by Product.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [Order].id, Shipper.companyName, [Order].shippedDate
from [Order]
join Shipper on [Order].shipVia = Shipper.id
where [Order].orderDate < "2012-08-09"
order by [Order].orderDate

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
