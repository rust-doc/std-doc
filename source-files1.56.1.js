var N = null;var sourcesIndex = {};
sourcesIndex["alloc"] = {"name":"","dirs":[{"name":"collections","dirs":[{"name":"btree","dirs":[{"name":"map","files":["entry.rs"]}],"files":["append.rs","borrow.rs","fix.rs","map.rs","mem.rs","merge_iter.rs","mod.rs","navigate.rs","node.rs","remove.rs","search.rs","set.rs","split.rs"]},{"name":"vec_deque","files":["drain.rs","into_iter.rs","iter.rs","iter_mut.rs","macros.rs","mod.rs","pair_slices.rs","ring_slices.rs"]}],"files":["binary_heap.rs","linked_list.rs","mod.rs"]},{"name":"prelude","files":["mod.rs","v1.rs"]},{"name":"vec","files":["cow.rs","drain.rs","drain_filter.rs","in_place_drop.rs","into_iter.rs","is_zero.rs","mod.rs","partial_eq.rs","set_len_on_drop.rs","source_iter_marker.rs","spec_extend.rs","spec_from_elem.rs","spec_from_iter.rs","spec_from_iter_nested.rs","splice.rs"]}],"files":["alloc.rs","borrow.rs","boxed.rs","fmt.rs","lib.rs","macros.rs","raw_vec.rs","rc.rs","slice.rs","str.rs","string.rs","sync.rs","task.rs"]};
sourcesIndex["core"] = {"name":"","dirs":[{"name":"alloc","files":["global.rs","layout.rs","mod.rs"]},{"name":"array","files":["equality.rs","iter.rs","mod.rs"]},{"name":"char","files":["convert.rs","decode.rs","methods.rs","mod.rs"]},{"name":"convert","files":["mod.rs","num.rs"]},{"name":"fmt","dirs":[{"name":"rt","files":["v1.rs"]}],"files":["builders.rs","float.rs","mod.rs","num.rs"]},{"name":"future","files":["future.rs","into_future.rs","mod.rs","pending.rs","poll_fn.rs","ready.rs"]},{"name":"hash","files":["mod.rs","sip.rs"]},{"name":"iter","dirs":[{"name":"adapters","files":["chain.rs","cloned.rs","copied.rs","cycle.rs","enumerate.rs","filter.rs","filter_map.rs","flatten.rs","fuse.rs","inspect.rs","intersperse.rs","map.rs","map_while.rs","mod.rs","peekable.rs","rev.rs","scan.rs","skip.rs","skip_while.rs","step_by.rs","take.rs","take_while.rs","zip.rs"]},{"name":"sources","files":["empty.rs","from_fn.rs","once.rs","once_with.rs","repeat.rs","repeat_with.rs","successors.rs"]},{"name":"traits","files":["accum.rs","collect.rs","double_ended.rs","exact_size.rs","iterator.rs","marker.rs","mod.rs"]}],"files":["mod.rs","range.rs","sources.rs"]},{"name":"macros","files":["mod.rs"]},{"name":"mem","files":["manually_drop.rs","maybe_uninit.rs","mod.rs"]},{"name":"num","dirs":[{"name":"dec2flt","files":["common.rs","decimal.rs","float.rs","fpu.rs","lemire.rs","mod.rs","number.rs","parse.rs","slow.rs","table.rs"]},{"name":"flt2dec","dirs":[{"name":"strategy","files":["dragon.rs","grisu.rs"]}],"files":["decoder.rs","estimator.rs","mod.rs"]},{"name":"shells","files":["i128.rs","i16.rs","i32.rs","i64.rs","i8.rs","int_macros.rs","isize.rs","u128.rs","u16.rs","u32.rs","u64.rs","u8.rs","usize.rs"]}],"files":["bignum.rs","diy_float.rs","error.rs","f32.rs","f64.rs","fmt.rs","int_log10.rs","int_macros.rs","mod.rs","nonzero.rs","saturating.rs","uint_macros.rs","wrapping.rs"]},{"name":"ops","files":["arith.rs","bit.rs","control_flow.rs","deref.rs","drop.rs","function.rs","generator.rs","index.rs","mod.rs","range.rs","try_trait.rs","unsize.rs"]},{"name":"panic","files":["location.rs","panic_info.rs","unwind_safe.rs"]},{"name":"prelude","files":["mod.rs","v1.rs"]},{"name":"ptr","files":["const_ptr.rs","metadata.rs","mod.rs","mut_ptr.rs","non_null.rs","unique.rs"]},{"name":"slice","dirs":[{"name":"iter","files":["macros.rs"]}],"files":["ascii.rs","cmp.rs","index.rs","iter.rs","memchr.rs","mod.rs","raw.rs","rotate.rs","sort.rs","specialize.rs"]},{"name":"stdarch","dirs":[{"name":"crates","dirs":[{"name":"core_arch","dirs":[{"name":"src","dirs":[{"name":"aarch64","dirs":[{"name":"neon","files":["generated.rs","mod.rs"]}],"files":["armclang.rs","crc.rs","mod.rs","prefetch.rs","tme.rs","v8.rs"]},{"name":"arm","files":["armclang.rs","dsp.rs","ex.rs","mod.rs","neon.rs","sat.rs","simd32.rs","v6.rs","v7.rs"]},{"name":"arm_shared","dirs":[{"name":"barrier","files":["cp15.rs","mod.rs"]},{"name":"neon","files":["generated.rs","mod.rs"]},{"name":"registers","files":["aarch32.rs","mod.rs"]}],"files":["crc.rs","crypto.rs","hints.rs","mod.rs"]},{"name":"mips","files":["mod.rs"]},{"name":"nvptx","files":["mod.rs"]},{"name":"powerpc","files":["mod.rs","vsx.rs"]},{"name":"powerpc64","files":["mod.rs"]},{"name":"wasm32","files":["atomic.rs","memory.rs","mod.rs","simd128.rs"]},{"name":"x86","files":["abm.rs","adx.rs","aes.rs","avx.rs","avx2.rs","avx512bf16.rs","avx512bitalg.rs","avx512bw.rs","avx512cd.rs","avx512f.rs","avx512gfni.rs","avx512ifma.rs","avx512vaes.rs","avx512vbmi.rs","avx512vbmi2.rs","avx512vnni.rs","avx512vpclmulqdq.rs","avx512vpopcntdq.rs","bmi1.rs","bmi2.rs","bswap.rs","bt.rs","cpuid.rs","eflags.rs","f16c.rs","fma.rs","fxsr.rs","macros.rs","mod.rs","pclmulqdq.rs","rdrand.rs","rdtsc.rs","rtm.rs","sha.rs","sse.rs","sse2.rs","sse3.rs","sse41.rs","sse42.rs","sse4a.rs","ssse3.rs","tbm.rs","xsave.rs"]},{"name":"x86_64","files":["abm.rs","adx.rs","avx.rs","avx2.rs","avx512f.rs","bmi.rs","bmi2.rs","bswap.rs","bt.rs","cmpxchg16b.rs","fxsr.rs","macros.rs","mod.rs","rdrand.rs","sse.rs","sse2.rs","sse41.rs","sse42.rs","xsave.rs"]}],"files":["macros.rs","mod.rs","simd.rs","simd_llvm.rs"]}]}]}]},{"name":"str","files":["converts.rs","error.rs","iter.rs","lossy.rs","mod.rs","pattern.rs","traits.rs","validations.rs"]},{"name":"stream","dirs":[{"name":"stream","files":["mod.rs"]}],"files":["from_iter.rs","mod.rs"]},{"name":"sync","files":["atomic.rs","mod.rs"]},{"name":"task","files":["mod.rs","poll.rs","ready.rs","wake.rs"]},{"name":"unicode","files":["mod.rs","printable.rs","unicode_data.rs"]}],"files":["any.rs","ascii.rs","bool.rs","borrow.rs","cell.rs","clone.rs","cmp.rs","default.rs","ffi.rs","hint.rs","internal_macros.rs","intrinsics.rs","lazy.rs","lib.rs","marker.rs","option.rs","panic.rs","panicking.rs","pin.rs","primitive.rs","result.rs","time.rs","tuple.rs","unit.rs"]};
sourcesIndex["proc_macro"] = {"name":"","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","lib.rs","quote.rs"]};
sourcesIndex["std"] = {"name":"","dirs":[{"name":"backtrace","dirs":[{"name":"src","dirs":[{"name":"backtrace","files":["dbghelp.rs","mod.rs"]},{"name":"symbolize","files":["dbghelp.rs","mod.rs"]}],"files":["dbghelp.rs","lib.rs","print.rs","types.rs","windows.rs"]}]},{"name":"collections","dirs":[{"name":"hash","files":["map.rs","mod.rs","set.rs"]}],"files":["mod.rs"]},{"name":"ffi","files":["c_str.rs","mod.rs","os_str.rs"]},{"name":"io","dirs":[{"name":"buffered","files":["bufreader.rs","bufwriter.rs","linewriter.rs","linewritershim.rs","mod.rs"]}],"files":["copy.rs","cursor.rs","error.rs","impls.rs","mod.rs","prelude.rs","stdio.rs","util.rs"]},{"name":"net","files":["addr.rs","ip.rs","mod.rs","parser.rs","tcp.rs","udp.rs"]},{"name":"os","dirs":[{"name":"fd","files":["mod.rs","net.rs","owned.rs","raw.rs"]},{"name":"linux","files":["fs.rs","mod.rs","process.rs","raw.rs"]},{"name":"raw","files":["mod.rs"]},{"name":"unix","dirs":[{"name":"ffi","files":["mod.rs","os_str.rs"]},{"name":"io","files":["fd.rs","mod.rs","raw.rs"]},{"name":"net","files":["addr.rs","ancillary.rs","datagram.rs","listener.rs","mod.rs","stream.rs"]}],"files":["fs.rs","mod.rs","process.rs","raw.rs","thread.rs"]},{"name":"wasi","dirs":[{"name":"io","files":["fd.rs","mod.rs","raw.rs"]},{"name":"net","files":["mod.rs"]},{"name":"unix","dirs":[{"name":"ffi","files":["os_str.rs"]}]}],"files":["ffi.rs","fs.rs","mod.rs"]},{"name":"windows","dirs":[{"name":"io","files":["handle.rs","mod.rs","raw.rs","socket.rs"]}],"files":["ffi.rs","fs.rs","mod.rs","process.rs","raw.rs","thread.rs"]}],"files":["mod.rs"]},{"name":"prelude","files":["mod.rs","v1.rs"]},{"name":"sync","dirs":[{"name":"mpsc","files":["blocking.rs","cache_aligned.rs","mod.rs","mpsc_queue.rs","oneshot.rs","shared.rs","spsc_queue.rs","stream.rs","sync.rs"]}],"files":["barrier.rs","condvar.rs","mod.rs","mutex.rs","once.rs","poison.rs","rwlock.rs"]},{"name":"sys","dirs":[{"name":"common","files":["alloc.rs","mod.rs"]},{"name":"windows","dirs":[{"name":"c","files":["errors.rs"]}],"files":["alloc.rs","args.rs","c.rs","cmath.rs","compat.rs","condvar.rs","env.rs","fs.rs","handle.rs","io.rs","memchr.rs","mod.rs","mutex.rs","net.rs","os.rs","os_str.rs","path.rs","pipe.rs","process.rs","rand.rs","rwlock.rs","stack_overflow.rs","stdio.rs","thread.rs","thread_local_dtor.rs","thread_local_key.rs","thread_parker.rs","time.rs"]}],"files":["mod.rs"]},{"name":"sys_common","dirs":[{"name":"condvar","files":["check.rs"]},{"name":"thread_parker","files":["mod.rs"]}],"files":["backtrace.rs","condvar.rs","fs.rs","io.rs","memchr.rs","mod.rs","mutex.rs","net.rs","process.rs","remutex.rs","rt.rs","rwlock.rs","thread.rs","thread_info.rs","thread_local_dtor.rs","thread_local_key.rs","wtf8.rs"]},{"name":"thread","files":["local.rs","mod.rs"]},{"name":"time","files":["monotonic.rs"]}],"files":["alloc.rs","ascii.rs","backtrace.rs","env.rs","error.rs","f32.rs","f64.rs","fs.rs","keyword_docs.rs","lazy.rs","lib.rs","macros.rs","num.rs","panic.rs","panicking.rs","path.rs","primitive_docs.rs","process.rs","rt.rs","time.rs"]};
sourcesIndex["test"] = {"name":"","dirs":[{"name":"formatters","files":["json.rs","junit.rs","mod.rs","pretty.rs","terse.rs"]},{"name":"helpers","files":["concurrency.rs","exit_code.rs","isatty.rs","metrics.rs","mod.rs"]},{"name":"term","dirs":[{"name":"terminfo","dirs":[{"name":"parser","files":["compiled.rs"]}],"files":["mod.rs","parm.rs","searcher.rs"]}],"files":["win.rs"]}],"files":["bench.rs","cli.rs","console.rs","event.rs","lib.rs","options.rs","stats.rs","term.rs","test_result.rs","time.rs","types.rs"]};
createSourceSidebar();