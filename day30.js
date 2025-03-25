function areYouPlayingBanjo(name) {
    return name.startsWith("r") || name.startsWith("R") ? name + " plays banjo" : name + " does not play banjo"
  }

  console.log(areYouPlayingBanjo("rolf"));
  console.log(areYouPlayingBanjo("Rolf"));
  console.log(areYouPlayingBanjo("Brave"));
  