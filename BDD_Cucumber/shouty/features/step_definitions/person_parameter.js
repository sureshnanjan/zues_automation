const { defineParameterType } = require('@cucumber/cucumber')

const Person = require('D:/automation/course/zues_automation/BDD_Cucumber/shouty/src/shouty.js')

defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name)
})