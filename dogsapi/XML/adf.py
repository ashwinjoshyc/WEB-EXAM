from lxml import etree

# Load and validate the XML data against the XSD schema
xml_schema = etree.XMLSchema(file='schema.xsd')
xml_data = etree.parse('data.xml')

if xml_schema.validate(xml_data):
    print("XML data is valid.")
else:
    print("XML data is not valid. Validation errors:")
    for error in xml_schema.error_log:
        print(error)

# Transform the XML data using XSLT
xslt = etree.XSLT(file='transform.xslt')
html_output = xslt(xml_data)

# Save the HTML result to a file or display it
with open('output.html', 'wb') as output_file:
    output_file.write(etree.tostring(html_output, pretty_print=True))
