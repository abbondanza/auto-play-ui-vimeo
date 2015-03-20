module.exports = function(grunt){
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.initConfig({
		dirs : {
			root : 'public'
		},
	    sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                '<%= dirs.root %>/css/style.css': 'public/sass/style.scss'
	            }
	        }
	    },
	    concat: {
		    js: {
		      options: {
		      	separator: ';',
		      },
		      src: [
		      	'<%= dirs.root %>/built/start.js',
		      	'<%= dirs.root %>/built/modules/*.js',
		      	'<%= dirs.root %>/built/modules/models/*.js',
		      	'<%= dirs.root %>/built/modules/utils/*.js',
		      	'<%= dirs.root %>/built/modules/views/*.js',
		      	'<%= dirs.root %>/built/end.js'
		      ],
		      dest: '<%= dirs.root %>/dest/app.js'
		    },
		    html : {
		    	options: {
			      	separator: '\n'
			      },
			    src: [
			      	'<%= dirs.root %>/tpl/*.tpl'
			      ],
			    dest: '<%= dirs.root %>/index.html'
			}
		},
	});
	 
	grunt.registerTask('default', ['sass', 'concat']);
}

