1. Vẽ Fllow Chart giải phương trình bậc nhất

2. Vẽ Fllow Chart giải phương trình bậc hai

3. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n;
s = S + 1/i+1 (s= 0; i=0)
4. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1/2 + 1/4 + 1/6 + ... + 1/2n;
S = s+ 1/2i + 1 (i = 1; s= 0)
5. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n + 1);

S = s+ 1/2i + 1 (i = 1; s = 1)

6. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1/(1x2) + 1/(2x3) + ... + 1/(n x (n + 1))
s = s+ 1/ ix(i+1) (s = 0 ; i = 1)
7. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1/2 + 2/3 + ... + n/n+1;

s = S + i/i+1 (s= 0; i=1)
8. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1/2 + 3/4 + ... + (2n + 1)/(2n + 2);
s = s + (2i + 1)/(2i + 2) (s = 0; i = 0)
9. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1 x 2 x 3 x ... x n;

s = s x (i+1) (s = 1 ; i = 0)

10. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính T(x, n) = x^n;
S = s x X (i+1; i<n ; s = 1)
11. Vẽ lưu đồ thuật toán cho tính toán sau:

Tính S(n) = 1 + 1x2 + 1x2x3 + ...+ 1x2x3x...xn;
S(3) = 1 + 1x2 + 1x2x3;

for (i=1; i<=n; i++){
    for(j=1; j <= i; j++){
        r = r * j;
    }
    s = s + r;
}


