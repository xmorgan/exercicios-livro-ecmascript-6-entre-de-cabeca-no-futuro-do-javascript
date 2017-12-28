#include <stdio.h>
int main(void) {
	printf("1) Eu não vou conversar em sala de aula.\n");

	// 998 printfs omitidos

	printf("999) Eu não vou conversar em sala de aula.\n");
	printf("1000) Eu não vou conversar em sala de aula.\n");

	return 0;
}

File.open('punishment.c', 'w') do |output|
	output.puts '#include <stdio.h>'
		output.puts 'int main(void) {'
		1.upto(1000) do |i|
			output.puts "printf(\"#{i}." +
			"Eu não vou conversar em aula. \\n\");"
		end
	output.puts 'return 0;'
	output.puts '}'
end
