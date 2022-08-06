# TaxAdda Frontend Assignment
As part of our application process, we'd like to check your ability by giving you a small assignment. It should take you no more than a few hours to complete the assignment, but any extra polish or features you might want to put in, will not go unnoticed.

The assignment
We would like you to create an invoicing app. The features it should include:
*  Create a new invoice
*  Add line items to the invoice. Line items may include hours of work at a certain rate, work-related expenses, materials, labor, etc.
*  Add notes to the invoice, including possibly how to pay it, where to send checks, etc.
*  Send the invoice via email (does not have to actually send emails, but if it does, great!)
*  View invoices including status (paid, outstanding, late, etc.)

# API’s 
Add Invoice - https://rscdev.taxadda.com/api/invoice/add
Type - POST

Body - 
{
  "name": "prateek",
  "dueDate": "12-mar-2022",
  "grossAmount": "1000",
  "billNo": "1",
  "billDate": "12-mar-2022",
  "lineItem": [
    {
      "productName": "Samsung phone",
      "quantity": 2,
      "price": 1000,
      "amount": 1000,
      "gstRate": 5
    }
  ],
  "gstAmount": 50,
  "netAmount": 1050,
  "notes": "notes check",
  "status": "due  "
}

List Invoice - https://rscdev.taxadda.com/api/invoice/list
Type - GET

Note - API are open and does not require any type of authentication

Extra credit features
*  View late invoices, or even better, alert when an invoice is late
*  Polish and UX
*  Highly reusable components
*  Tests

Requirements
You should use the following tools to accomplish this task:
* React
* Redux (Optional)
* Webpack (Create-react-app boilerplate is fine)
* Typescript (Optional) 
If you have any questions, please ask!

To complete your assignment, please fork this repo and commit your work to your fork. When you are ready for us to look at it, give us access to your fork so we can review and run it. Please fill up this short form for its submission -
https://docs.google.com/forms/d/e/1FAIpQLSfE3abmPUj7uZnSebuAomczuVwSZaNWKmnUewMjv_tAN5qhhA/viewform
