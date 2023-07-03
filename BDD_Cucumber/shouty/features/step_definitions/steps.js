const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { Person, Network } = require('D:/automation/course/zues_automation/BDD_Cucumber/shouty/src/shouty.js')
const { assertThat, is } = require('hamjest')
Before(function () {
  const network = new Network()
})
Given('Lucy is located/standing {int} metre(s) from Sean', function (distance) {
    this.lucy = new Person(this.network)
    this.sean = new Person(this.network)
    this.lucy.moveTo(distance)
  })

  When('Sean shouts {string}', function (message) {
    this.sean.shout(message)
    this.messageFromSean = message
  })

  Then('Lucy hears Sean\'s message', function () {
    assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]))
  })