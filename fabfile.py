from fabric.contrib.files import append, exists, sed
from fabric.api import run, env, local

REPO_URL = 'https://github.com/example/example.git'