def main():
    cc_num = input()
    return luhn(cc_num)


def luhn(cc_num):
    reverse = cc_num[::-1]
    rev_nums = ' '.join(reverse)
    rev_nums = rev_nums.split(' ')
    # for num in range(1, len(reverse) + 1):
    #     if num % 2 == 0:
    #         print(reverse[num-1])
    for num in rev_nums:
        print(num)
    return reverse


print(main())
