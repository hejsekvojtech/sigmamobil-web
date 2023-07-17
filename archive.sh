#!/bin/bash

zip -r sigmamobil-src-$(date +%Y%m%d%H%M) . \
    -x node_modules/\* \
    -x **/node_modules/\* \
    -x build/\* \
    -x **/build/\* \
    -x *.zip \
    -x package-lock.json
