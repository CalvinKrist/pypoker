import { getPairs, getHighCard, getSet, getStraight, getFlush, getFullHouse, getFourOfAKind, compareHand, HandType, getUniqueHighCard } from "../backend/HandComparer";
import { Card } from "../state/Card"

describe("testing your Colyseus app", () => {
    
    it("getPairs returns empty array when no pairs", async() => {
        let hand = [];

        hand.push(new Card(2, 0));
        hand.push(new Card(3, 0));
        hand.push(new Card(4, 0));
        hand.push(new Card(5, 0));
        hand.push(new Card(6, 0));

        expect(getPairs(hand)).toEqual([]);
    });

    it("getPairs returns all pairs in reverse order of size", async() => {
        let hand1 = [];

        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getPairs(hand1)).toEqual([2]);

        let hand2 = [];

        hand2.push(new Card(2, 0));
        hand2.push(new Card(2, 0));
        hand2.push(new Card(5, 0));
        hand2.push(new Card(5, 0));
        hand2.push(new Card(6, 0));

        expect(getPairs(hand2)).toEqual([5, 2]);
    });

    it("getPairs returns [] for sets", async() => {
        let hand1 = [];

        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getPairs(hand1)).toEqual([]);
    });

    it("getHighCard returns cards in order of size", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getHighCard(hand1)).toEqual([6, 5, 4, 2, 1]);
    });

    it("getUniqueHighCard returns only unique high cards", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 0));
        hand1.push(new Card(6, 0));

        expect(getUniqueHighCard(hand1)).toEqual([4, 2, 1]);
    });

    it("getSet returns null when there's no set", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getSet(hand1)).toEqual(null);
    });

    it("getSet returns a set", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 0));

        expect(getSet(hand1)).toEqual(4);
    });

    it("getStraight returns null when there's no straight", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 0));

        expect(getStraight(hand1)).toEqual(null);

        hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getStraight(hand1)).toEqual(null);
    });

    it("getStraight works even when the card range is 4 and there is no straight", async() => {
        let hand1 = [];

        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 0));

        expect(getStraight(hand1)).toEqual(null);
    });

    it("getStraight returns the hightest value of a straight", async() => {
        let hand1 = [];

        hand1.push(new Card(3, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));
        hand1.push(new Card(7, 0));

        expect(getStraight(hand1)).toEqual(7);

        hand1 = [];

        hand1.push(new Card(7, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));
        hand1.push(new Card(3, 0));

        expect(getStraight(hand1)).toEqual(7);

        hand1 = [];
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        expect(getStraight(hand1)).toEqual(12);
    })

    it("getStraight works with aces", async() => {
        let hand1 = [];

        hand1.push(new Card(14, 0));
        hand1.push(new Card(13, 0));
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));

        expect(getStraight(hand1)).toEqual(14);

        hand1 = [];

        hand1.push(new Card(14, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 0));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 0));

        expect(getStraight(hand1)).toEqual(5);
    })

    it("getFlush detects a lack of suit", async() => {
        let hand1 = [];

        hand1.push(new Card(14, 0));
        hand1.push(new Card(13, 1));
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));

        expect(getFlush(hand1)).toEqual(false);
    })

    it("getFlush detects a suit", async() => {
        let hand1 = [];

        hand1.push(new Card(14, 2));
        hand1.push(new Card(13, 2));
        hand1.push(new Card(12, 2));
        hand1.push(new Card(11, 2));
        hand1.push(new Card(10, 2));

        expect(getFlush(hand1)).toEqual(true);
    })

    it("getFlush detects a suit", async() => {
        let hand1 = [];

        hand1.push(new Card(14, 2));
        hand1.push(new Card(13, 2));
        hand1.push(new Card(12, 2));
        hand1.push(new Card(11, 2));
        hand1.push(new Card(10, 2));

        expect(getFlush(hand1)).toEqual(true);
    })

    it("getFullHouse returns [set, pair]", async() => {
        let hand1 = [];

        hand1.push(new Card(2, 2));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(3, 2));

        expect(getFullHouse(hand1)).toEqual([2, 3]);

        hand1 = [];

        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(5, 2));
        hand1.push(new Card(5, 2));
        hand1.push(new Card(5, 2));

        expect(getFullHouse(hand1)).toEqual([5, 4]);
    })

    it("getFullHouse returns [] when there's no full house", async() => {
        let hand1 = [];

        hand1.push(new Card(2, 2));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(8, 2));
        hand1.push(new Card(9, 2));
        hand1.push(new Card(10, 2));

        expect(getFullHouse(hand1)).toEqual([]);

        hand1 = [];

        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(8, 2));
        hand1.push(new Card(5, 2));

        expect(getFullHouse(hand1)).toEqual([]);
    })

    it("getFourOfAKind returns null when there's no four of a kind", async() => {
        let hand1 = [];

        hand1.push(new Card(1, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 0));

        expect(getFourOfAKind(hand1)).toEqual(null);
    });

    it("getFourOfAKind returns the correct value", async() => {
        let hand1 = [];

        hand1.push(new Card(12, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(12, 0));
        hand1.push(new Card(12, 0));
        hand1.push(new Card(12, 0));

        expect(getFourOfAKind(hand1)).toEqual(12);
    });

    it("compareHand works for straight flushes", async() => {
        let hand1 = [];
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.StraightFlush]);

        hand1 = [];
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        let hand2 = [];
        hand2.push(new Card(7, 0));
        hand2.push(new Card(11, 0));
        hand2.push(new Card(10, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(8, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.StraightFlush]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.StraightFlush]);

        hand1 = [];
        hand1.push(new Card(12, 0));
        hand1.push(new Card(11, 0));
        hand1.push(new Card(10, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        hand2 = [];
        hand2.push(new Card(12, 0));
        hand2.push(new Card(11, 1));
        hand2.push(new Card(10, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(13, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.StraightFlush]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.StraightFlush]);
    });

    it("compareHand works for four of a kinds", async() => {
        let hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.FourOfAKind]);

        hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        let hand2 = [];
        hand2.push(new Card(9, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(8, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.FourOfAKind]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.FourOfAKind]);

        hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 0));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.FourOfAKind]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.FourOfAKind]);
        
        // Verify that high card beats ties
        hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(8, 0));
        hand2 = [];
        hand2.push(new Card(8, 0));
        hand2.push(new Card(8, 0));
        hand2.push(new Card(8, 0));
        hand2.push(new Card(2, 0));
        hand2.push(new Card(8, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.FourOfAKind, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.FourOfAKind, HandType.HighCard]);
    });

    it("compareHand works for full house", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.FullHouse]);

        // Verify high-set wins
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        let hand2 = [];
        hand2.push(new Card(5, 0));
        hand2.push(new Card(5, 0));
        hand2.push(new Card(10, 0));
        hand2.push(new Card(10, 0));
        hand2.push(new Card(10, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.FullHouse]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.FullHouse]);

        // If set is tied, high-pair wins
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        hand2 = [];
        hand2.push(new Card(4, 0));
        hand2.push(new Card(4, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(9, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.FullHouse]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.FullHouse]);

        // Verify full house beats something worse
        hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 0));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.FullHouse]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.FullHouse]);
    });

    it("compareHand works for flush", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.Flush]);

        // Verify high cards break ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(10, 0));
        hand1.push(new Card(9, 0));

        let hand2 = [];
        hand2.push(new Card(5, 0));
        hand2.push(new Card(5, 0));
        hand2.push(new Card(9, 0));
        hand2.push(new Card(10, 0));
        hand2.push(new Card(10, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Flush, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Flush, HandType.HighCard]);

        // Verify flush beats something worse
        hand1 = [];
        hand1.push(new Card(8, 0));
        hand1.push(new Card(3, 0));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 0));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.Flush]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.Flush]);
    });

    it("compareHand works for straights", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(5, 4));
        hand1.push(new Card(6, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.Straight]);

        // Verify high cards break ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 1));

        let hand2 = [];
        hand2.push(new Card(4, 1));
        hand2.push(new Card(5, 1));
        hand2.push(new Card(6, 2));
        hand2.push(new Card(7, 2));
        hand2.push(new Card(8, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Straight, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Straight, HandType.HighCard]);

        // Verify straight beats something worse
        hand1 = [];
        hand1.push(new Card(8, 3));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(10, 1));
        hand1.push(new Card(11, 1));
        hand1.push(new Card(12, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 2));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.Straight]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.Straight]);
    });

    it("compareHand works for sets", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 4));
        hand1.push(new Card(6, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.Set]);

        // Verify high set breaks ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        let hand2 = [];
        hand2.push(new Card(4, 1));
        hand2.push(new Card(5, 1));
        hand2.push(new Card(6, 2));
        hand2.push(new Card(6, 2));
        hand2.push(new Card(6, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Set]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Set]);

        // Verify high card breaks ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(4, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        hand2 = [];
        hand2.push(new Card(4, 1));
        hand2.push(new Card(4, 1));
        hand2.push(new Card(4, 2));
        hand2.push(new Card(2, 2));
        hand2.push(new Card(14, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Set, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Set, HandType.HighCard]);

        // Verify set beats something worse
        hand1 = [];
        hand1.push(new Card(8, 3));
        hand1.push(new Card(9, 0));
        hand1.push(new Card(9, 1));
        hand1.push(new Card(9, 1));
        hand1.push(new Card(12, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 2));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.Set]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.Set]);
    });

    it("compareHand works for two pair", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(4, 4));
        hand1.push(new Card(6, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.TwoPair]);

        // Verify high pairs break ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        let hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(6, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.TwoPair]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.TwoPair]);

        hand1 = [];
        hand1.push(new Card(3, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(5, 3));
        hand1.push(new Card(5, 0));
        hand1.push(new Card(6, 1));

        hand2 = [];
        hand2.push(new Card(4, 1));
        hand2.push(new Card(4, 1));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(6, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.TwoPair]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.TwoPair]);

        // Verify high card breaks ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(4, 2));
        hand2.push(new Card(4, 2));
        hand2.push(new Card(14, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.TwoPair, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.TwoPair, HandType.HighCard]);

        // Verify two pair beats something worse
        hand1 = [];
        hand1.push(new Card(8, 3));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(9, 1));
        hand1.push(new Card(9, 1));
        hand1.push(new Card(12, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(3, 0));
        hand2.push(new Card(2, 2));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.TwoPair]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.TwoPair]);
    });

    it("compareHand works for pair", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(2, 2));
        hand1.push(new Card(3, 0));
        hand1.push(new Card(4, 4));
        hand1.push(new Card(6, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.Pair]);

        // Verify high pair break ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        let hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(3, 1));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(5, 2));
        hand2.push(new Card(6, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Pair]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Pair]);

        // Verify high card breaks ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(12, 2));
        hand1.push(new Card(4, 3));
        hand1.push(new Card(4, 0));
        hand1.push(new Card(6, 1));

        hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(3, 1));
        hand2.push(new Card(4, 2));
        hand2.push(new Card(4, 2));
        hand2.push(new Card(14, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.Pair, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.Pair, HandType.HighCard]);

        // Verify two pair beats something worse
        hand1 = [];
        hand1.push(new Card(8, 3));
        hand1.push(new Card(8, 0));
        hand1.push(new Card(10, 1));
        hand1.push(new Card(9, 1));
        hand1.push(new Card(12, 0));

        hand2 = [];
        hand2.push(new Card(1, 0));
        hand2.push(new Card(2, 1));
        hand2.push(new Card(3, 0));
        hand2.push(new Card(14, 2));
        hand2.push(new Card(4, 0));

        expect(compareHand(hand1, hand2)).toEqual([1, HandType.Pair]);
        expect(compareHand(hand2, hand1)).toEqual([-1, HandType.Pair]);
    });

    it("compareHand works for high card", async() => {
        let hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(7, 0));
        hand1.push(new Card(8, 4));
        hand1.push(new Card(11, 0));

        expect(compareHand(hand1, hand1)).toEqual([0, HandType.HighCard]);

        // Verify high card break ties
        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(7, 0));
        hand1.push(new Card(8, 4));
        hand1.push(new Card(11, 0));

        let hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(3, 1));
        hand2.push(new Card(7, 2));
        hand2.push(new Card(8, 2));
        hand2.push(new Card(12, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.HighCard]);

        hand1 = [];
        hand1.push(new Card(2, 0));
        hand1.push(new Card(3, 2));
        hand1.push(new Card(7, 0));
        hand1.push(new Card(8, 4));
        hand1.push(new Card(11, 0));

        hand2 = [];
        hand2.push(new Card(2, 1));
        hand2.push(new Card(6, 1));
        hand2.push(new Card(7, 2));
        hand2.push(new Card(8, 2));
        hand2.push(new Card(11, 0));

        expect(compareHand(hand1, hand2)).toEqual([-1, HandType.HighCard]);
        expect(compareHand(hand2, hand1)).toEqual([1, HandType.HighCard]);
    });
  });
