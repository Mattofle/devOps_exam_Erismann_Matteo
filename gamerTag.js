module.exports = {

    checkGamerTag (tag) {
      if (tag.length > 9) return 'Invalid - gamertag length must be at least 8 characters'
  
      return 'gamer tag ok'
    }
  
  }