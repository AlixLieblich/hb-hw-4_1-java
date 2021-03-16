"use strict";

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon','Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

function countMelons(melonsArray) {
    const melon_counts = {};

    for (const melon of melonsArray) {
        if (melonCounts[melon]) {
            melon_counts += 1;
        } else {
            melon_counts[melon] = 1;
        }
    }
    print(melon_counts);
}

console.log(countMelons(melonsToAdd));