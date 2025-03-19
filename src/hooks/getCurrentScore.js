import { useState, useEffect } from 'react';

export const getCurrentScore = async (gameId) => {
  const apiKey = 'luKiaKnnuM5AyqYEimwuW2YnoRK9ks4F6wYPP307'
  const scoreUrl = 'https://api.sportradar.us/ncaamb/trial/v8/en/games/' + gameId + '/boxscore.json?api_key=' + apiKey;

  let currentScore = [];

  await fetch(scoreUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentScore = [data.home.points];
    })
    return currentScore;
}