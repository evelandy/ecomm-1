def main():
    cards = input('enter your hand: ').upper()
    rf = royal_flush(cards)
    sf = straight_flush(cards)
    fk = four_of_kind(cards)
    fh = full_house(cards)
    fl = flush(cards)
    st = straight(cards)
    tk = three_kind(cards)
    tp = two_pair(cards)
    op = one_pair(cards)
    hc = high_card(cards)
    if rf:
        return 'Royal Flush'
    elif sf:
        return 'Straight Flush'
    elif fh:
        return 'Full House'
    elif fk:
        return 'Four of a Kind'
    elif fl:
        return 'Flush'
    elif st:
        return 'Straight'
    elif tk:
        return 'Three of a Kind'
    elif tp:
        return 'Two Pair'
    elif op:
        return 'One Pair'
    else:
        return hc


def royal_flush(cards):
    suit_arr = []
    card_arr = []
    r_f_kind = ['10', 'J', 'Q', 'K', 'A']
    r_f_suit = []
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_arr.append(kind)
        suit_arr.append(suit)
    for card in card_arr:
        if card in r_f_kind:
            r_f_kind.remove(card)
    for suit in suit_arr:
        if suit not in r_f_suit:
            r_f_suit.append(suit)
        else:
            pass
    if len(r_f_kind) == 0 and len(r_f_suit) == 1:
        return True
    else:
        return False


def straight_flush(cards):
    suit_arr = []
    card_arr = []
    r_f_kind = {'a': ['a', '2', '3', '4', '5'], 'b': ['2', '3', '4', '5', '6'], 'c': ['3', '4', '5', '6', '7'],
                'd': ['4', '5', '6', '7', '8'], 'e': ['5', '6', '7', '8', '9'], 'f': ['6', '7', '8', '9', '10'],
                'g': ['7', '8', '9', '10', 'J'], 'h': ['8', '9', '10', 'J', 'Q'], 'i': ['9', '10', 'J', 'Q', 'K']}
    r_f_suit = []
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_arr.append(kind)
        suit_arr.append(suit)
    for suit in suit_arr:
        if suit not in r_f_suit:
            r_f_suit.append(suit)
        else:
            pass
    if len(r_f_suit) == 1:
        if sorted(card_arr) == sorted(r_f_kind['a']) or sorted(card_arr) == sorted(r_f_kind['b']) or sorted(card_arr)\
                == sorted(r_f_kind['c']) or sorted(card_arr) == sorted(r_f_kind['d']) or sorted(card_arr)\
                == sorted(r_f_kind['e']) or sorted(card_arr) == sorted(r_f_kind['f']) or sorted(card_arr)\
                == sorted(r_f_kind['g']) or sorted(card_arr) == sorted(r_f_kind['h']) or sorted(card_arr)\
                == sorted(r_f_kind['i']):
            return True
        else:
            return False


def four_of_kind(cards):
    card_arr = []
    card_vals = []
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        card_arr.append(kind)
    for card in card_arr:
        if card not in card_vals:
            card_vals.append(card)
        else:
            pass
    if len(card_vals) == 2:
        return True
    else:
        return False


def full_house(cards):
    card_arr = []
    card_obj = {}
    house = [2, 3]
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        card_arr.append(kind)
    for card in card_arr:
        if card in card_obj.keys():
            card_obj[card] += 1
        else:
            card_obj[card] = 1
    for card in card_obj.values():
        if card in house:
            house.remove(card)
    if len(house) == 0:
        return True
    else:
        return False


def flush(cards):
    suit_arr = []
    card_arr = []
    r_f_kind = {'a': ['a', '2', '3', '4', '5'], 'b': ['2', '3', '4', '5', '6'], 'c': ['3', '4', '5', '6', '7'],
                'd': ['4', '5', '6', '7', '8'], 'e': ['5', '6', '7', '8', '9'], 'f': ['6', '7', '8', '9', '10'],
                'g': ['7', '8', '9', '10', 'J'], 'h': ['8', '9', '10', 'J', 'Q'], 'i': ['9', '10', 'J', 'Q', 'K']}
    r_f_suit = []
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_arr.append(kind)
        suit_arr.append(suit)
    for suit in suit_arr:
        if suit not in r_f_suit:
            r_f_suit.append(suit)
        else:
            pass
    if len(r_f_suit) == 1 and sorted(card_arr) not in r_f_kind.values():
        return True
    else:
        return False


def straight(cards):
    suit_arr = []
    card_arr = []
    r_f_kind = {'a': ['a', '2', '3', '4', '5'], 'b': ['2', '3', '4', '5', '6'], 'c': ['3', '4', '5', '6', '7'],
                'd': ['4', '5', '6', '7', '8'], 'e': ['5', '6', '7', '8', '9'], 'f': ['6', '7', '8', '9', '10'],
                'g': ['7', '8', '9', '10', 'J'], 'h': ['8', '9', '10', 'J', 'Q'], 'i': ['9', '10', 'J', 'Q', 'K'],
                'j': ['10', 'J', 'Q', 'K', 'A']}
    r_f_suit = []
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_arr.append(kind)
        suit_arr.append(suit)
    for suit in suit_arr:
        if suit not in r_f_suit:
            r_f_suit.append(suit)
        else:
            pass
    if sorted(card_arr) == sorted(r_f_kind['a']) or sorted(card_arr) == sorted(r_f_kind['b']) or \
            sorted(card_arr) == sorted(r_f_kind['c']) or sorted(card_arr) == sorted(r_f_kind['d']) or \
            sorted(card_arr) == sorted(r_f_kind['e']) or sorted(card_arr) == sorted(r_f_kind['f']) or \
            sorted(card_arr) == sorted(r_f_kind['g']) or sorted(card_arr) == sorted(r_f_kind['h']) or \
            sorted(card_arr) == sorted(r_f_kind['i']) or sorted(card_arr) == sorted(r_f_kind['j']) and \
            len(r_f_suit) > 1:
        return True
    else:
        return False


def three_kind(cards):
    card_arr = []
    card_obj = {}
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        card_arr.append(kind)
    for card in card_arr:
        if card in card_obj.keys():
            card_obj[card] += 1
        else:
            card_obj[card] = 1
    if 3 in card_obj.values() and 2 not in card_obj.values():
        return True
    else:
        return False


def two_pair(cards):
    card_obj = {}
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_obj[kind] = suit
    if len(card_obj) == 3:
        return True
    else:
        return False


def one_pair(cards):
    card_obj = {}
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_obj[kind] = suit
    if len(card_obj) == 4:
        return True
    else:
        return False


def high_card(cards):
    high_to_low = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    card_obj = {}
    for card in cards.split():
        if len(card) == 3:
            kind = card[:2]
        else:
            kind = card[0]
        suit = card[-1]
        card_obj[kind] = suit
    for card in high_to_low:
        for key, val in card_obj.items():
            if card == key:
                return "High Card: {}".format(key + val)


print(main())


ui.texasworkforce.org