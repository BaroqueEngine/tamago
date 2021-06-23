import sys, hashlib

if len(sys.argv) != 3:
  exit()

salt = sys.argv[1]
n = sys.argv[2]

if hashlib.sha512(salt.encode()).hexdigest()[0:8] != "86d656a5":
  exit()

print(hashlib.sha512((salt + n).encode()).hexdigest()[0:12])
