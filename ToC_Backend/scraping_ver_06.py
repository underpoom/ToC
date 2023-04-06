import requests
import re

import csv

def get_temples_data(specific_province=None):
	available_provinces = {
		"chumporn": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดชุมพร",
		"chaengrai": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดเชียงราย",
		"trang": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดตรัง",
		"trat": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดตราด",
		"uttaradit": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดอุตรดิตถ์",
	}
	
	provinces = []
	if specific_province is not None:
		p = specific_province
		if p not in available_provinces:
			raise ValueError
		provinces = [(p, available_provinces[p])]
	else:
		provinces = [(k, v) for k, v in available_provinces.items()]
	
	res = {}
	
	for p, p_url in provinces:
		# print(p)
		
		data = requests.get(p_url)

		pattern = re.compile('<main[\u0000-\uFFFF]*id="ดูเพิ่ม">ดูเพิ่ม</span>')
		result = re.findall(pattern, data.text)
		
		pattern = re.compile('<li>.*</li>')
		result = re.findall(pattern, '\n'.join(result))
		result = re.sub('<.*?>', '', '\n'.join(result))
		
		pattern = re.compile('วัด.*')
		result = re.findall(pattern, result)
		result = re.sub(' ตำบล.*', '', '\n'.join(result))
		
		# trat
		result = re.sub('มติ.*', '', result)
		result = re.sub('.* วัด', 'วัด', result)
		
		# trang
		result = re.sub('\n[a-zA-Z0-9./:=?;&]+', '', result)
		
		#uttaradit
		# result = re.sub('\u200b', '', result)
		
		result = re.sub(' \(.*\)', '', result)
		# print(result.split('\n'))
		# print(result)
		# print("- "*50)
		
		temple_list = result.split('\n')
		# print(result.split('\n'))
		# print("- "*50)
		# print()
		
		for temple in temple_list:
			if p not in res:
				res[p] = []
			res[p].append(temple)
	
	return res

if __name__ == "__main__":
	temples = get_temples_data()
	print(temples)
	# print(get_temples_data('trang'))
	
	'''
	with open('temple_list_ver_06.csv', 'w', newline='', encoding='utf-8') as csvfile:
		csv_writer = csv.writer(csvfile)
		
		csv_writer.writerow(['province', 'temple'])
		for iProvince in temples:
			csv_writer.writerows([(iProvince, t) for t in temples[iProvince]])
	'''

