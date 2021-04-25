нужно реализовать паттерн chaining

написать функцию createHash

которая сможет работать вот так:

createHash()
  .set('3', 2)
  .set('4', 5)
  .remove('3')
  .getValues() // {'4': 5}
