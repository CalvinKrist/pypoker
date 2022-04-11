import { Card } from "../state/Card";
import { Player } from "../state/Player";

function count(arr: number[], target: number) {
    let c = 0;
    for (let n of arr) {
        if (n == target) {
            c += 1;
        }
    }

    return c;
}

export function getHighCard(hand: Card[]) {
    return hand.map(x => x.value).sort((a, b) => a - b).reverse();
}

export function getUniqueHighCard(hand: Card[]) {
    let nums = hand.map(x => x.value);
    return hand.filter(x => count(nums, x.value) == 1)
        .map(x => x.value)
        .sort((a, b) => a - b)
        .reverse();
}

export function getPairs(hand: Card[]) {
    let pairs = [];
    let nums = hand.map(x => x.value);

    for (let card of hand) {
        if (count(nums, card.value) == 2 && pairs.indexOf(card.value) == -1) {
            pairs.push(card.value);
        }
    }

    return pairs.sort((a, b) => a - b).reverse();
}

export function getSet(hand: Card[]) {
    let nums = hand.map(x => x.value);
    for (let card of hand) {
        if (count(nums, card.value) == 3) {
            return card.value;
        }
    }

    return null;
}

export function getStraight(hand: Card[]) {
    let handVals = hand.map(x => x.value).sort((a, b) => a - b);

    for (let val of handVals) {
        if (count(handVals, val) > 1) {
            return null;
        }
    }

    // Attempt to find a straight with ace's as 14
    if (handVals.slice(-1)[0] - handVals[0] == 4) {
        return handVals.slice(-1)[0];
    }

    // If still no straight try ace's as 1
    for (let i = 0; i < handVals.length; i++) {
        if (handVals[i] == 14) {
            handVals[i] = 1;
        }
    }
    handVals.sort((a, b) => a - b);
    if (handVals.slice(-1)[0] - handVals[0] == 4) {
        return handVals.slice(-1)[0];
    }

    return null;
}

export function getFlush(hand: Card[]) {
    let suit = hand[0].suit;
    for (let card of hand) {
        if (card.suit != suit) {
            return false;
        }
    }

    return true;
}

export function getFullHouse(hand: Card[]) {
    let set = getSet(hand);
    if (!set) {
        return [];
    }

    let pair = getPairs(hand);
    if (pair.length == 0) {
        return [];
    }

    return [set, pair[0]];
}

export function getFourOfAKind(hand: Card[]) {
    let nums = hand.map(x => x.value);
    for (let card of hand) {
        if (count(nums, card.value) == 4) {
            return card.value;
        }
    }

    return null;
}

export enum HandType {
    HighCard,
    Pair,
    TwoPair,
    Set,
    Straight,
    Flush,
    FullHouse,
    FourOfAKind,
    StraightFlush
}

export function compareHand(hand1: Card[], hand2: Card[]) {
    // Check for straight flush (royal flush is a subset)
    let isStraightFlush1 = getFlush(hand1) && getStraight(hand1);
    let isStraightFlush2 = getFlush(hand2) && getStraight(hand2);
    if (isStraightFlush1 && isStraightFlush2) {
        if (getStraight(hand1) > getStraight(hand2)) {
            return [1, HandType.StraightFlush];
        }
        if (getStraight(hand1) == getStraight(hand2)) {
            return [0, HandType.StraightFlush];
        }
        return [-1, HandType.StraightFlush];
    } else if (isStraightFlush1) {
        return [1, HandType.StraightFlush];
    } else if (isStraightFlush2) {
        return [-1, HandType.StraightFlush];
    }

    // Check for four of a kind
    if (getFourOfAKind(hand1) && getFourOfAKind(hand2)) {
        if (getFourOfAKind(hand1) > getFourOfAKind(hand2)) {
            return [1, HandType.FourOfAKind];
        }
        if (getFourOfAKind(hand1) == getFourOfAKind(hand2)) {
            // High card beats ties
            let highCard1 = getUniqueHighCard(hand1);
            let highCard2 = getUniqueHighCard(hand2);
            if (highCard1[0] == highCard2[0]) {
                return [0, HandType.FourOfAKind];
            }
            if (highCard1[0] > highCard2[0])
                return [1, HandType.FourOfAKind, HandType.HighCard];
            return [-1, HandType.FourOfAKind, HandType.HighCard];
        }
        return [-1, HandType.FourOfAKind];
    } else if (getFourOfAKind(hand1)) {
        return [1, HandType.FourOfAKind];
    } else if (getFourOfAKind(hand2)) {
        return [-1, HandType.FourOfAKind];
    }

    // Check for full house
    if (getFullHouse(hand1).length > 0 && getFullHouse(hand2).length > 0) {
        let h1 = getFullHouse(hand1);
        let h2 = getFullHouse(hand2);
        for (let i = 0; i < h1.length; i++) {
            if (h1[i] > h2[i]) {
                return [1, HandType.FullHouse];
            } else if (h1[i] < h2[i]) {
                return [-1, HandType.FullHouse];
            }
        }
        return [0, HandType.FullHouse];
    } else if (getFullHouse(hand1).length > 0) {
        return [1, HandType.FullHouse];
    } else if (getFullHouse(hand2).length > 0) {
        return [-1, HandType.FullHouse];
    }

    // Check for flush
    if (getFlush(hand1) && getFlush(hand2)) {
        let h1 = getHighCard(hand1);
        let h2 = getHighCard(hand2);
        for (let i = 0; i < h1.length; i++) {
            if (h1[i] > h2[i]) {
                return [1, HandType.Flush, HandType.HighCard];
            } else if (h2[i] > h1[i]) {
                return [-1, HandType.Flush, HandType.HighCard];
            }
        }
        return [0, HandType.Flush];
    } else if (getFlush(hand1)) {
        return [1, HandType.Flush];
    } else if (getFlush(hand2)) {
        return [-1, HandType.Flush];
    }

    // Check for straight
    if (getStraight(hand1) && getStraight(hand2)) {
        if (getStraight(hand1) > getStraight(hand2)) {
            return [1, HandType.Straight, HandType.HighCard];
        } else if (getStraight(hand2) > getStraight(hand1)) {
            return [-1, HandType.Straight, HandType.HighCard];
        }
        return [0, HandType.Straight];
    } else if (getStraight(hand1)) {
        return [1, HandType.Straight];
    } else if (getStraight(hand2)) {
        return [-1, HandType.Straight];
    }

    // Check for sets
    if (getSet(hand1) && getSet(hand2)) {
        if (getSet(hand1) > getSet(hand2)) {
            return [1, HandType.Set];
        } else if (getSet(hand2) > getSet(hand1)) {
            return [-1, HandType.Set];
        }

        // High card beats tie breaker
        let h1 = getUniqueHighCard(hand1);
        let h2 = getUniqueHighCard(hand2);
        for (let i = 0; i < h1.length; i++) {
            if (h1[i] > h2[i]) {
                return [1, HandType.Set, HandType.HighCard];
            } else if (h2[i] > h1[i]) {
                return [-1, HandType.Set, HandType.HighCard];
            }
        }
        return [0, HandType.Set];
    } else if (getSet(hand1)) {
        return [1, HandType.Set];
    } else if (getSet(hand2)) {
        return [-1, HandType.Set];
    }

    // Check for two pair
    if (getPairs(hand1).length == 2 && getPairs(hand2).length == 2) {
        let pairs1 = getPairs(hand1);
        let pairs2 = getPairs(hand2);
        for (let i = 0; i < pairs1.length; i++) {
            if (pairs1[i] > pairs2[i]) {
                return [1, HandType.TwoPair];
            } else if (pairs2[i] > pairs1[i]) {
                return [-1, HandType.TwoPair];
            }
        }

        // High card beats tie breaker
        let h1 = getUniqueHighCard(hand1)[0];
        let h2 = getUniqueHighCard(hand2)[0];
        if (h1 > h2) {
            return [1, HandType.TwoPair, HandType.HighCard];
        } else if (h2 > h1) {
            return [-1, HandType.TwoPair, HandType.HighCard];
        }

        return [0, HandType.TwoPair];
    } else if (getPairs(hand1).length == 2) {
        return [1, HandType.TwoPair];
    } else if (getPairs(hand2).length == 2) {
        return [-1, HandType.TwoPair];
    }

    // Check for pair
    if (getPairs(hand1).length == 1 && getPairs(hand2).length == 1) {
        let pair1 = getPairs(hand1)[0];
        let pair2 = getPairs(hand2)[0];
        if (pair1 > pair2) {
            return [1, HandType.Pair];
        } else if (pair2 > pair1) {
            return [-1, HandType.Pair];
        }

        // High cards beats tie breaker
        let h1 = getUniqueHighCard(hand1);
        let h2 = getUniqueHighCard(hand2);
        for (let i = 0; i < h1.length; i++) {
            if (h1[i] > h2[i]) {
                return [1, HandType.Pair, HandType.HighCard];
            } else if (h2[i] > h1[i]) {
                return [-1, HandType.Pair, HandType.HighCard];
            }
        }

        return [0, HandType.Pair];
    } else if (getPairs(hand1).length == 1) {
        return [1, HandType.Pair];
    } else if (getPairs(hand2).length == 1) {
        return [-1, HandType.Pair];
    }

    // Check for high card
    let h1 = getUniqueHighCard(hand1);
    let h2 = getUniqueHighCard(hand2);
    for (let i = 0; i < h1.length; i++) {
        if (h1[i] > h2[i]) {
            return [1, HandType.HighCard];
        } else if (h2[i] > h1[i]) {
            return [-1, HandType.HighCard];
        }
    }

    return [0, HandType.HighCard]
}

/**
 * Generate all combinations of an array.
 * @param {Array} sourceArray - Array of input elements.
 * @param {number} comboLength - Desired length of combinations.
 * @return {Array} Array of combination arrays.
 */
function generateCombinations<T>(sourceArray: T[], comboLength: number) {
    const sourceLength = sourceArray.length;
    if (comboLength > sourceLength) return [];

    const combos: T[][] = []; // Stores valid combinations as they are generated.

    // Accepts a partial combination, an index into sourceArray, 
    // and the number of elements required to be added to create a full-length combination.
    // Called recursively to build combinations, adding subsequent elements at each call depth.
    const makeNextCombos = (workingCombo: T[], currentIndex: number, remainingCount: number) => {
        const oneAwayFromComboLength = remainingCount == 1;

        // For each element that remaines to be added to the working combination.
        for (let sourceIndex = currentIndex; sourceIndex < sourceLength; sourceIndex++) {
            // Get next (possibly partial) combination.
            const next = [...workingCombo, sourceArray[sourceIndex]];

            if (oneAwayFromComboLength) {
                // Combo of right length found, save it.
                combos.push(next);
            }
            else {
                // Otherwise go deeper to add more elements to the current partial combination.
                makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
            }
        }
    }

    makeNextCombos([], 0, comboLength);
    return combos;
}


export function getPlayersBestHand(hand: Card[], board: Card[]) {
    let allCards: Card[] = [];
    // Using the concat function results in 'undefined' values sometimes
    for(let card of hand) {
        allCards.push(card);
    }
    for(let card of board) {
        allCards.push(card);
    }

    let combs = generateCombinations(allCards, 5);

    let bestHand = combs[0];
    for(let i = 1; i < combs.length; i++) { 
        if(compareHand(combs[i], bestHand)[0] == 1) {
            bestHand = combs[i];
        }
    }

    return bestHand;
}
