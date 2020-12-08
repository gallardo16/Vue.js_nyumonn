const items = [
  {
    name: 'pencil',
    price: 300,
    quantity: 13
  },
  {
    name: 'note',
    price: 400,
    quantity: 0
  },
  {
    name: 'eraser',
    price: 500,
    quantity: 0
  }
]

const vm = new Vue({
  el: '#app',
  data: {
    items: items
  },
  filters: {
    numberWithDelimiter: function (vlue) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  methods: {
    doBuy: function () {
      alert(this.totalPriceWithTax + '円のお買い上げ！')
      this.items.foreach(function (item) {
        item.quantity = 0
      })
    }
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function () {
      return this.totalPrice >= 1000
    },
    errorMessageClass: function () {
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle: function () {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'tomato'
      }
    }
  }
})
