for i in range(500):
    i = str(i)
    with open('./f500/%s.txt' % i, 'w', encoding='utf-8') as f:
        f.write(i)
