#!/bin/bash

# Define the path to the input file
input_file="/Users/bogdansandu/Work/qstn-grqphql-backend-v2-implementation/qstn-graphql-api-server/server/types/schema-ready.graphql"

# Define the path to the output file
output_file="/Users/bogdansandu/Work/qstn-grqphql-backend-v2-implementation/qstn-graphql-api-server/server/service/serviceSchema.ts"
tmp_file="/tmp/serviceSchemaTMP.txt"

# Read the input file, replace all occurrences of the backtick character with a single quote character, and write the result to the output file using a template
sed "s/\`/'/g" "${input_file}" > "${tmp_file}"

file_contents=$(cat "$tmp_file")
tmpls='import { gql } from "apollo-server-express";\n\nexport const ServiceTypeDefs = `\n'
tmple='\n`;'

# Concatenate the variables
result="$tmpls $file_contents $tmple"
echo "$result" > "$output_file"

# Print a success message
echo "Output written to ${output_file}"

#cp "/home/ubuntu/DEVELOPMENT/graphql/server/types/resolvers.ts" "/home/qstn/DEV/QSTN/BETA/marketplace/apps/web/types/resolvers.ts"
#cp "/home/qstn/DEV/QSTN/graphql-server/server/types/resolvers.ts" "/home/qstn/DEV/QSTN/BETA/admin/apps/web/types/resolvers.ts"
#echo "Output written duplicated into the client /home/qstn/DEV/QSTN/graphql-server/server/types/resolvers.ts"
